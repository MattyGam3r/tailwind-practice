

export default function SmallButton() {
  //This is a button that changes with size (using sm: prefix)
  // This should act only on above 40rem
  return (
    <button className="bg-rose-500 sm:bg-amber-300">
      I change with size
    </button>
  )
}
