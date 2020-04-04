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
  textCbd(): Tailwind { return this.add("text-CBD"); }
  textA0A(): Tailwind { return this.add("text-A0A"); }
  text2D3(): Tailwind { return this.add("text-2D3"); }
  bgFff(): Tailwind { return this.add("bg-FFF"); }
  bgF7F(): Tailwind { return this.add("bg-F7F"); }
  borderE2E(): Tailwind { return this.add("border-E2E"); }
  borderCbd(): Tailwind { return this.add("border-CBD"); }
  w320(): Tailwind { return this.add("w-320"); }
  w640(): Tailwind { return this.add("w-640"); }
  w100(): Tailwind { return this.add("w-100%"); }
  maxW800(): Tailwind { return this.add("max-w-800"); }
  flexWrap(): Tailwind { return this.add("flex-wrap"); }
  flexWrapReverse(): Tailwind { return this.add("flex-wrap-reverse"); }
  flexNoWrap(): Tailwind { return this.add("flex-no-wrap"); }
  lt960W320(): Tailwind { return this.add("lt960___w-320"); }
  lt960W640(): Tailwind { return this.add("lt960___w-640"); }
  lt960W100(): Tailwind { return this.add("lt960___w-100%"); }
  lt960MaxW800(): Tailwind { return this.add("lt960___max-w-800"); }
  fr960To1280W320(): Tailwind { return this.add("fr960to1280___w-320"); }
  fr960To1280W640(): Tailwind { return this.add("fr960to1280___w-640"); }
  fr960To1280W100(): Tailwind { return this.add("fr960to1280___w-100%"); }
  fr960To1280MaxW800(): Tailwind { return this.add("fr960to1280___max-w-800"); }
  gt1280W320(): Tailwind { return this.add("gt1280___w-320"); }
  gt1280W640(): Tailwind { return this.add("gt1280___w-640"); }
  gt1280W100(): Tailwind { return this.add("gt1280___w-100%"); }
  gt1280MaxW800(): Tailwind { return this.add("gt1280___max-w-800"); }
}
