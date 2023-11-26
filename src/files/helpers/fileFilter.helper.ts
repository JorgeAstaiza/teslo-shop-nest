/* eslint-disable prettier/prettier */
export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error('No file provided!'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  if (allowedExtensions.includes(fileExtension)) {
    return callback(null, true);
  } else {
    return callback(new Error('Only image files are allowed!'), false);
  }
};
