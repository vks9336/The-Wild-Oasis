import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded.');
  }
  // console.log(data);

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted.');
  }
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    '',
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Edit the cabin
  let query = supabase.from('cabins');

  // A. Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B. Edit
  else if (id)
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created.');
  }

  // 2. Uplaod Image
  if (hasImagePath) return data;

  const { error: storageErrors } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading image
  if (storageErrors) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(storageErrors);
    throw new Error(
      'Cabin image could not be uploaded and the cabin was not created.',
    );
  }

  return data;
}
