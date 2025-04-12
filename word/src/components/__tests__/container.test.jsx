import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import Container from "../Container";

//iu test
test("it renders the text", () => {
  render(<Container />);

  const textarea = screen.getByRole("textbox");
  fireEvent.change(textarea, { target: { value: "Hello World" } });

  expect(textarea.value).toBe("Hello World");
  expect(screen.queryByText("No script tags allowed!")).toBeNull();
  expect(screen.queryByText("No @ allowed!")).toBeNull();
});

test("it blocks script tag entry", () => {
  render(<Container />);
  const textarea = screen.getByRole("textbox");
  fireEvent.change(textarea, { target: { value: "<script>" } });
  expect(textarea.value).toBe("");
  expect(screen.getByText("No script tags allowed!")).toBeInTheDocument();
});

test("it blocks @ entry", () => {
  render(<Container />);
  const textarea = screen.getByRole("textbox");
  fireEvent.change(textarea, { target: { value: "@" } });
  expect(textarea.value).toBe("");
  expect(screen.getByText("No @ allowed!")).toBeInTheDocument();
});

test("it logs chracacter counts", () => {
  render(<Container />);
  const textarea = screen.getByRole("textbox");
  fireEvent.change(textarea, { target: { value: "Hello World" } });

  const heading = screen.getByText("CHARACTERS");
  const statSection = heading.parentNode;
  expect(statSection).toHaveClass("stat");
  expect(statSection).toHaveTextContent("11");
  expect(statSection).not.toHaveTextContent("12");

  const SocialsFB = screen.getByText("FACEBOOK");
  const socialSectionFB = SocialsFB.parentNode;
  expect(socialSectionFB).toHaveClass("stat");
  expect(socialSectionFB).toHaveTextContent(2189);
  expect(socialSectionFB).not.toHaveTextContent(2188);

  const SocialsIG = screen.getByText("INSTAGRAM");
  const socialSectionIG = SocialsIG.parentNode;
  expect(socialSectionIG).toHaveClass("stat");
  expect(socialSectionIG).toHaveTextContent(269);
  expect(socialSectionIG).not.toHaveTextContent(678);

  const spanFB = socialSectionFB.querySelector("span");
  expect(spanFB).toBeInTheDocument();
  expect(spanFB).toHaveClass("stats__number");

  const spanIG = socialSectionIG.querySelector("span");
  expect(spanIG).toBeInTheDocument();
  expect(spanIG).toHaveClass("stats__number");

  fireEvent.change(textarea, { target: { value: "A".repeat(10000) } });
  expect(spanIG).toHaveClass("stat__number--limit");
  expect(spanFB).toHaveClass("stat__number--limit");
});

test("it logs word counts", () => {
  render(<Container />);
  const textarea = screen.getByRole("textbox");
  fireEvent.change(textarea, { target: { value: "Hello World" } });

  const heading = screen.getByText("WORDS");
  const statSection = heading.parentNode;
  expect(statSection).toHaveClass("stat");
  expect(statSection).toHaveTextContent("2");
  expect(statSection).not.toHaveTextContent("3");
});

test("it flags fb limits", () => {
  render(<Container />);
  const textarea = screen.getByRole("textbox");
  const heading = screen.getByText("WORDS");
  fireEvent.change(textarea, { target: { value: "Hello World" } });
  const statSection = heading.parentNode;
  expect(statSection).toHaveClass("stat");

  expect(statSection).toHaveTextContent("2");
  expect(statSection).not.toHaveTextContent("3");
});
