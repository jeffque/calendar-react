import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export type NoteArgs = {
    markdown: string
}

export function Note(args: NoteArgs) {
    return <ReactMarkdown children={args.markdown} remarkPlugins={[remarkGfm]} />
}