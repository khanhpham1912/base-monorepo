import * as Headless from "@headlessui/react";
import * as LinkNext from "next/link";
import React, { forwardRef } from "react";

export const Link = forwardRef(function Link(
  props: React.ComponentPropsWithoutRef<"a"> & LinkNext.LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <LinkNext.default {...props} ref={ref} />
    </Headless.DataInteractive>
  );
});
