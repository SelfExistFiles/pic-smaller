// Declaration file for GifWasmModule
export const gifsicle: (options: {
  data: {
    file: ArrayBuffer;
    name: string;
  }[];
  command: string[];
}) => Promise<{
  file: ArrayBuffer;
  name: string;
}[]>;