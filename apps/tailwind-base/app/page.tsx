"use client"

import { For, Match, Show, Switch } from "@/components/common"
import { useState } from "react"

export default function Home() {
  const [enableShow, setEnableShow] = useState(false)
  return (
    <div className="container mx-auto flex flex-col gap-y-4 py-8">
      <div className="rounded-lg border border-solid border-neutral-100 p-4">
        <For each={[1, 2, 3, 4, 5]}>
          {(data, index) => <div key={index}>{data}</div>}
        </For>
      </div>
      <div className="rounded-lg border border-solid border-neutral-100 p-4">
        <Show when={enableShow} fallback={<div>disable Show</div>}>
          <div>Show Component</div>
        </Show>
      </div>
      <div className="rounded-lg border border-solid border-neutral-100 p-4">
        <Switch fallback={<p>Fallback content</p>}>
          <Match when={enableShow}>
            <p>Outcome 1</p>
          </Match>
          <Match when={!enableShow}>
            <p>Outcome 2</p>
          </Match>
        </Switch>
      </div>
      <button
        onClick={() => {
          setEnableShow((prev) => !prev)
        }}
      >
        Change show
      </button>
    </div>
  )
}
