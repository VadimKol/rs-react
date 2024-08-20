export const FILE_SIZE = 1024 * 1024 * 2;
export const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const convertToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (): void => resolve(reader.result as string);
    reader.onerror = (error): void => reject(error);
  });

export const getPasswordStrength = (strength: string): string => {
  switch (strength) {
    case '1':
      return 'Medium';
    case '0':
      return 'Strong';
    default:
      return 'Low';
  }
};
