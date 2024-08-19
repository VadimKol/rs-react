export const convertToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (): void => resolve(reader.result as string);
    reader.onerror = (error): void => reject(error);
  });
