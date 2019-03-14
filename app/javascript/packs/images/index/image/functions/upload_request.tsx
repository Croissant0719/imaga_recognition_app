const uploadRequest = (e: any, props: any) => {
  const target = e.target as HTMLInputElement;
  const file = target.files[0] as File;
  const file_path = URL.createObjectURL(file);

  props.setImage(file_path);
};

export default uploadRequest;