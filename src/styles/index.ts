// http://github.com/dvkndn/typed-tailwind
export const Tw = (): Tailwind => new Tailwind();

class Tailwind {
  value = "";

  // Getter methods
  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  $(): string { return this.value; }
  [Symbol.toPrimitive](): string { return this.$(); }

  // Building methods
  private add(value: string): Tailwind {
    this.value = `${this.value} ${value}`;
    return this;
  }

  // Styling methods
  textTransparent(): Tailwind { return this.add("text-transparent"); }
  textBlack(): Tailwind { return this.add("text-black"); }
  textWhite(): Tailwind { return this.add("text-white"); }
  textGray100(): Tailwind { return this.add("text-gray-100"); }
  textGray200(): Tailwind { return this.add("text-gray-200"); }
  textGray300(): Tailwind { return this.add("text-gray-300"); }
  textGray400(): Tailwind { return this.add("text-gray-400"); }
  textGray500(): Tailwind { return this.add("text-gray-500"); }
  textGray600(): Tailwind { return this.add("text-gray-600"); }
  textGray700(): Tailwind { return this.add("text-gray-700"); }
  textGray800(): Tailwind { return this.add("text-gray-800"); }
  textGray900(): Tailwind { return this.add("text-gray-900"); }
  bgTransparent(): Tailwind { return this.add("bg-transparent"); }
  bgBlack(): Tailwind { return this.add("bg-black"); }
  bgWhite(): Tailwind { return this.add("bg-white"); }
  bgGray100(): Tailwind { return this.add("bg-gray-100"); }
  bgGray200(): Tailwind { return this.add("bg-gray-200"); }
  bgGray300(): Tailwind { return this.add("bg-gray-300"); }
  bgGray400(): Tailwind { return this.add("bg-gray-400"); }
  bgGray500(): Tailwind { return this.add("bg-gray-500"); }
  bgGray600(): Tailwind { return this.add("bg-gray-600"); }
  bgGray700(): Tailwind { return this.add("bg-gray-700"); }
  bgGray800(): Tailwind { return this.add("bg-gray-800"); }
  bgGray900(): Tailwind { return this.add("bg-gray-900"); }
}
