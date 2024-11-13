"use client"

import {
  Button,
  Col,
  Flex,
  For,
  Match,
  Portal,
  Row,
  Show,
  Switch,
} from "@/components/common"
import { useArray } from "@/hooks"
import { PropsWithChildren, useState } from "react"

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-lg border border-solid border-neutral-100 p-4">
      {children}
    </div>
  )
}

interface IOption {
  label: string
  value: string
}

const options: IOption[] = [
  { label: "label1", value: " value1" },
  { label: "label2", value: " value2" },
  { label: "label3", value: " value3" },
  { label: "label4", value: " value4" },
  { label: "label5", value: " value5" },
]

export default function Home() {
  const [enableShow, setEnableShow] = useState(false)
  const [showPortal, setShowPortal] = useState(false)
  const [list, action] = useArray(options)

  return (
    <div className="container mx-auto flex flex-col gap-y-4 py-8">
      <Card>
        <Flex layout={"vertical"} gap={4}>
          <Flex gap={3}>
            <Button
              onClick={() => {
                action.push({
                  label: "label6",
                  value: "value6",
                })
              }}
            >
              Push
            </Button>
            <Button
              onClick={() => {
                action.pop()
              }}
            >
              Pop
            </Button>
            <Button
              onClick={() => {
                action.shift()
              }}
            >
              Shift
            </Button>
            <Button
              onClick={() => {
                action.unshift({
                  label: "label7",
                  value: "value7",
                })
              }}
            >
              Unshift
            </Button>
            <Button
              onClick={() => {
                action.prepend({
                  label: "label8",
                  value: "value8",
                })
              }}
            >
              Prepend
            </Button>
            <Button
              onClick={() => {
                action.clear()
              }}
            >
              Clear
            </Button>
            <Button
              onClick={() => {
                action.reset()
              }}
            >
              Reset
            </Button>
            <Button
              onClick={() => {
                const value = action.valueAt(1)
                console.log("value:", value)
              }}
            >
              Get value at 1
            </Button>
            <Button
              onClick={() => {
                action.updateAt(0, {
                  label: "label9",
                  value: "value9",
                })
              }}
            >
              Update at 0
            </Button>
            <Button
              onClick={() => {
                action.insertAt(0, {
                  label: "label10",
                  value: "value10",
                })
              }}
            >
              Insert at 0
            </Button>
            <Button
              onClick={() => {
                action.removeAt(0)
              }}
            >
              Remove at 0
            </Button>
          </Flex>
          <For each={list}>
            {(item, index) => (
              <Flex
                layout={"vertical"}
                gap={3}
                className="rounded-lg border p-4"
                key={index}
              >
                <div className="rounded-lg bg-green-500 px-3 py-2 text-white">
                  {item?.label}
                </div>
                <div className="rounded-lg bg-green-500 px-3 py-2 text-white">
                  {item?.value}
                </div>
              </Flex>
            )}
          </For>
        </Flex>
      </Card>
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
