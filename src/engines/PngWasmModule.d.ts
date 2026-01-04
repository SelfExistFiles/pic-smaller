// Declaration file for PngWasmModule
export const Module: {
  _malloc: (size: number) => number;
  _free: (ptr: number) => void;
  _compress: (width: number, height: number, colors: number, dithering: number, buffer: number, outputSizePointer: number) => number;
  getValue: (ptr: number, type: string, noSafe: boolean) => number;
  HEAPU8: Uint8Array;
};