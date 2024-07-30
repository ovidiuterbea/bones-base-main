import React from "react"
import { BaseButton } from "./BaseButton"
import figma from "@figma/code-connect"


figma.connect(
  BaseButton,
  "https://www.figma.com/design/PvLcoNlywqTlp8ci1Mgqvx/Bones?node-id=50-2372&m=dev",
  {
    props: {
      label: figma.boolean("Label"),
      showRightIcon: figma.boolean("Show Right Icon"),
      rightIcon: figma.instance("↪Right Icon"),
      leftDivider: figma.boolean("Left Divider"),
      rightDivider: figma.boolean("Right Divider"),
      leftIcon: figma.instance("↪Left Icon"),
      showLeftIcon: figma.boolean("Show Left Icon"),
    },
    example: ({ disabled, label, type }) => {
      <button className="base-button">
      <button className="button-content">
        {showLeftIcon && <div className="left-icon" />}

        {leftDivider && <div className="divider" />}

        <div className="label">Button</div>

        {rightDivider && <div className="divider" />}

        {showRightIcon && <div className="right-icon" />}
      </button>
    </button>
    },
  })
  