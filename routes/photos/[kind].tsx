import { PageProps } from "$fresh/server.ts";

export default function Page(props: PageProps) {
    return (
        <div> Hello {JSON.stringify(props.params)}</div>
    )
}