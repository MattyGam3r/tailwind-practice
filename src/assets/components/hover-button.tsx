
export default function HoverButton() {
  //This function is used to test how the hovering components work on a button in tailwind
  //We use the state (in this case hover) prepended before the state we want to target
  //The prefixes are referred to as a variant!
  return (
    <button className="bg-sky-500 hover:bg-sky-700">
      hover:bg-sky-700
    </button>
  )
}
