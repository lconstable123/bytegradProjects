import Button from "./Button";

import { secondaryButtons } from "../../lib/constants";

export const ButtonGroup = (props) => {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => (
        <Button key={text} type="secondary">
          {text}
        </Button>
      ))}
    </section>
  );
};
