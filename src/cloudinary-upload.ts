import cloudiary, {UploadApiResponse, UploadApiErrorResponse} from 'cloudinary';

export const cloudinaryUpload = async (
  file: string,
  public_id: string,
  overwrite: boolean,
  invalidate: boolean,
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> => {
  return new Promise((resolve, reject) => {
    return cloudiary.v2.uploader.upload(file,{
      public_id,
      overwrite,
      invalidate,
      resource_type: 'auto',
    }, (error: UploadApiErrorResponse| undefined, result: UploadApiResponse | undefined) => {
      if (error) reject(error);
       else resolve(result);
    })
  });
};


export const cloudinaryUploadVideos = async (
  file: string,
  public_id: string,
  overwrite: boolean,
  invalidate: boolean,
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> => {
  return new Promise((resolve, reject) => {
    return cloudiary.v2.uploader.upload(file,{
      public_id,
      overwrite,
      invalidate,
      chunk_size: 50000,
      resource_type: 'video',
    }, (error: UploadApiErrorResponse| undefined, result: UploadApiResponse | undefined) => {
      if (error) reject(error);
       else resolve(result);
    })
  });
};