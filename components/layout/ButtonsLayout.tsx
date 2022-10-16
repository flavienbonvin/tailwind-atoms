import Button from "../atoms/Button"

const ButtonLayout = () => {
  return (
    <section>
      <h2 className="mt-4 mb-2 border-b border-b-slate-300 text-xl font-bold">
        Sizes
      </h2>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="large">Button large</Button>
        <Button>Button regular</Button>
        <Button size="small">Button small</Button>
      </div>
      <h2 className="mt-4 mb-2 border-b border-b-slate-300 text-xl font-bold">
        Variants
      </h2>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button>Button regular</Button>
        <Button variant="outline">Button outline</Button>
        <Button variant="ghost">Button ghost</Button>
        <Button variant="link">Button link</Button>
      </div>
      <h2 className="mt-4 mb-2 border-b border-b-slate-300 text-xl font-bold">
        States
      </h2>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button disabled>Button regular</Button>
        <Button variant="outline" disabled>
          Button outline
        </Button>
        <Button variant="ghost" disabled>
          Button ghost
        </Button>
        <Button variant="link" disabled>
          Button link
        </Button>
      </div>
    </section>
  )
}

export default ButtonLayout
