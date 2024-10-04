"use client"

import { Col, For, Match, Portal, Row, Show, Switch } from "@/components/common"
import { PropsWithChildren, useState } from "react"

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-lg border border-solid border-neutral-100 p-4">
      {children}
    </div>
  )
}

export default function Home() {
  const [enableShow, setEnableShow] = useState(false)
  const [showPortal, setShowPortal] = useState(false)

  return (
    <div className="container mx-auto flex flex-col gap-y-4 py-8">
      <Card>
        <For each={[1, 2, 3, 4, 5]}>
          {(data, index) => <div key={index}>{data}</div>}
        </For>
      </Card>
      <Card>
        <Show when={enableShow} fallback={<div>disable Show</div>}>
          <div>Show Component</div>
        </Show>
        <button
          onClick={() => {
            setEnableShow((prev) => !prev)
          }}
        >
          Change show
        </button>
      </Card>
      <Card>
        <Switch fallback={<p>Fallback content</p>}>
          <Match when={enableShow}>
            <p>Outcome 1</p>
          </Match>
          <Match when={!enableShow}>
            <p>Outcome 2</p>
          </Match>
        </Switch>
      </Card>
      <Card>
        <button onClick={() => setShowPortal(!showPortal)}>
          Toggle Portal
        </button>
        {showPortal && (
          <Portal refCallback={(el) => console.log("Portal element:", el)}>
            <div style={{ padding: "20px", background: "lightblue" }}>
              This is a portal!
            </div>
          </Portal>
        )}
      </Card>
      <Card>
        <Row gutter={2}>
          <Col xs={12} md={6} lg={4}>
            Col 1
          </Col>
          <Col xs={12} md={6} lg={4}>
            Col 12
          </Col>
          <Col xs={12} md={6} lg={4}>
            Col 13
          </Col>
          <Col xs={6}>Col 2</Col>
          <Col xs={4}>Col 3</Col>
        </Row>
      </Card>
    </div>
  )
}
