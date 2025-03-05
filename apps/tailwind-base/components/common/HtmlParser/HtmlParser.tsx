import { purifier } from "@/utils/dompurify"
import { useMemo } from "react"

const DOMPurify = purifier()

export const HtmlParser = ({ content }: { content: string }) => {
  const purify = DOMPurify(window)
  const clean = purify.sanitize("<b>hello there</b>")
  // const pureHtml = useMemo(() => {
  //   return DOMPurify.sanitize(content)
  // }, [content])
  return <div dangerouslySetInnerHTML={{ __html: clean }} />
}
