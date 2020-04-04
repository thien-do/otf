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
  hoverTextCbd(): Tailwind { return this.add("hover___text-CBD"); }
  hoverTextA0A(): Tailwind { return this.add("hover___text-A0A"); }
  hoverText2D3(): Tailwind { return this.add("hover___text-2D3"); }
  bgFff(): Tailwind { return this.add("bg-FFF"); }
  bgF7F(): Tailwind { return this.add("bg-F7F"); }
  shadow8(): Tailwind { return this.add("shadow-8"); }
  borderSolid(): Tailwind { return this.add("border-solid"); }
  borderDashed(): Tailwind { return this.add("border-dashed"); }
  borderDotted(): Tailwind { return this.add("border-dotted"); }
  borderDouble(): Tailwind { return this.add("border-double"); }
  borderNone(): Tailwind { return this.add("border-none"); }
  borderE2E(): Tailwind { return this.add("border-E2E"); }
  borderCbd(): Tailwind { return this.add("border-CBD"); }
  border1(): Tailwind { return this.add("border-1"); }
  borderT1(): Tailwind { return this.add("border-t-1"); }
  borderR1(): Tailwind { return this.add("border-r-1"); }
  borderB1(): Tailwind { return this.add("border-b-1"); }
  borderL1(): Tailwind { return this.add("border-l-1"); }
  w320(): Tailwind { return this.add("w-320"); }
  w640(): Tailwind { return this.add("w-640"); }
  wFull(): Tailwind { return this.add("w-full"); }
  maxW800(): Tailwind { return this.add("max-w-800"); }
  p18(): Tailwind { return this.add("p-18"); }
  p36(): Tailwind { return this.add("p-36"); }
  p72(): Tailwind { return this.add("p-72"); }
  py18(): Tailwind { return this.add("py-18"); }
  px18(): Tailwind { return this.add("px-18"); }
  py36(): Tailwind { return this.add("py-36"); }
  px36(): Tailwind { return this.add("px-36"); }
  py72(): Tailwind { return this.add("py-72"); }
  px72(): Tailwind { return this.add("px-72"); }
  pt18(): Tailwind { return this.add("pt-18"); }
  pr18(): Tailwind { return this.add("pr-18"); }
  pb18(): Tailwind { return this.add("pb-18"); }
  pl18(): Tailwind { return this.add("pl-18"); }
  pt36(): Tailwind { return this.add("pt-36"); }
  pr36(): Tailwind { return this.add("pr-36"); }
  pb36(): Tailwind { return this.add("pb-36"); }
  pl36(): Tailwind { return this.add("pl-36"); }
  pt72(): Tailwind { return this.add("pt-72"); }
  pr72(): Tailwind { return this.add("pr-72"); }
  pb72(): Tailwind { return this.add("pb-72"); }
  pl72(): Tailwind { return this.add("pl-72"); }
  m18(): Tailwind { return this.add("m-18"); }
  m24(): Tailwind { return this.add("m-24"); }
  m36(): Tailwind { return this.add("m-36"); }
  m48(): Tailwind { return this.add("m-48"); }
  my18(): Tailwind { return this.add("my-18"); }
  mx18(): Tailwind { return this.add("mx-18"); }
  my24(): Tailwind { return this.add("my-24"); }
  mx24(): Tailwind { return this.add("mx-24"); }
  my36(): Tailwind { return this.add("my-36"); }
  mx36(): Tailwind { return this.add("mx-36"); }
  my48(): Tailwind { return this.add("my-48"); }
  mx48(): Tailwind { return this.add("mx-48"); }
  mt18(): Tailwind { return this.add("mt-18"); }
  mr18(): Tailwind { return this.add("mr-18"); }
  mb18(): Tailwind { return this.add("mb-18"); }
  ml18(): Tailwind { return this.add("ml-18"); }
  mt24(): Tailwind { return this.add("mt-24"); }
  mr24(): Tailwind { return this.add("mr-24"); }
  mb24(): Tailwind { return this.add("mb-24"); }
  ml24(): Tailwind { return this.add("ml-24"); }
  mt36(): Tailwind { return this.add("mt-36"); }
  mr36(): Tailwind { return this.add("mr-36"); }
  mb36(): Tailwind { return this.add("mb-36"); }
  ml36(): Tailwind { return this.add("ml-36"); }
  mt48(): Tailwind { return this.add("mt-48"); }
  mr48(): Tailwind { return this.add("mr-48"); }
  mb48(): Tailwind { return this.add("mb-48"); }
  ml48(): Tailwind { return this.add("ml-48"); }
  flex1(): Tailwind { return this.add("flex-1"); }
  flexAuto(): Tailwind { return this.add("flex-auto"); }
  flexInitial(): Tailwind { return this.add("flex-initial"); }
  flexNone(): Tailwind { return this.add("flex-none"); }
  flexWrap(): Tailwind { return this.add("flex-wrap"); }
  flexWrapReverse(): Tailwind { return this.add("flex-wrap-reverse"); }
  flexNoWrap(): Tailwind { return this.add("flex-no-wrap"); }
  justifyStart(): Tailwind { return this.add("justify-start"); }
  justifyEnd(): Tailwind { return this.add("justify-end"); }
  justifyCenter(): Tailwind { return this.add("justify-center"); }
  justifyBetween(): Tailwind { return this.add("justify-between"); }
  justifyAround(): Tailwind { return this.add("justify-around"); }
  itemsStart(): Tailwind { return this.add("items-start"); }
  itemsEnd(): Tailwind { return this.add("items-end"); }
  itemsCenter(): Tailwind { return this.add("items-center"); }
  itemsBaseline(): Tailwind { return this.add("items-baseline"); }
  itemsStretch(): Tailwind { return this.add("items-stretch"); }
  text18(): Tailwind { return this.add("text-18"); }
  text24(): Tailwind { return this.add("text-24"); }
  text72(): Tailwind { return this.add("text-72"); }
  leading18(): Tailwind { return this.add("leading-18"); }
  leading24(): Tailwind { return this.add("leading-24"); }
  leading30(): Tailwind { return this.add("leading-30"); }
  leading36(): Tailwind { return this.add("leading-36"); }
  leadingNone(): Tailwind { return this.add("leading-none"); }
  fontSemibold(): Tailwind { return this.add("font-semibold"); }
  fontNormal(): Tailwind { return this.add("font-normal"); }
  lt960W320(): Tailwind { return this.add("lt960___w-320"); }
  lt960W640(): Tailwind { return this.add("lt960___w-640"); }
  lt960WFull(): Tailwind { return this.add("lt960___w-full"); }
  lt960MaxW800(): Tailwind { return this.add("lt960___max-w-800"); }
  lt960Flex1(): Tailwind { return this.add("lt960___flex-1"); }
  lt960FlexAuto(): Tailwind { return this.add("lt960___flex-auto"); }
  lt960FlexInitial(): Tailwind { return this.add("lt960___flex-initial"); }
  lt960FlexNone(): Tailwind { return this.add("lt960___flex-none"); }
  fr960To1280W320(): Tailwind { return this.add("fr960to1280___w-320"); }
  fr960To1280W640(): Tailwind { return this.add("fr960to1280___w-640"); }
  fr960To1280WFull(): Tailwind { return this.add("fr960to1280___w-full"); }
  fr960To1280MaxW800(): Tailwind { return this.add("fr960to1280___max-w-800"); }
  fr960To1280Flex1(): Tailwind { return this.add("fr960to1280___flex-1"); }
  fr960To1280FlexAuto(): Tailwind { return this.add("fr960to1280___flex-auto"); }
  fr960To1280FlexInitial(): Tailwind { return this.add("fr960to1280___flex-initial"); }
  fr960To1280FlexNone(): Tailwind { return this.add("fr960to1280___flex-none"); }
  gt1280W320(): Tailwind { return this.add("gt1280___w-320"); }
  gt1280W640(): Tailwind { return this.add("gt1280___w-640"); }
  gt1280WFull(): Tailwind { return this.add("gt1280___w-full"); }
  gt1280MaxW800(): Tailwind { return this.add("gt1280___max-w-800"); }
  gt1280Flex1(): Tailwind { return this.add("gt1280___flex-1"); }
  gt1280FlexAuto(): Tailwind { return this.add("gt1280___flex-auto"); }
  gt1280FlexInitial(): Tailwind { return this.add("gt1280___flex-initial"); }
  gt1280FlexNone(): Tailwind { return this.add("gt1280___flex-none"); }

  block(): Tailwind { return this.add("block"); }
  flex(): Tailwind { return this.add("flex"); }
}
