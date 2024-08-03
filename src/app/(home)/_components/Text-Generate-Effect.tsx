"use client";
import { TextGenerateEffect } from "../../../shared/ui/text-generate-effect";

const words = `I'm a frontend&backend developer and software engineer passionate about building a modern web application that i love.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
