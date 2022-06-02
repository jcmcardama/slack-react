const submitHandler = async (e) => {
  e.preventDefault()
}

const AddChannel = () => {
  return (
    <>
      
      <form onSubmit={submitHandler}>
        <button type="submit">Add Channel</button>
      </form>
    </>
  )
}

export default AddChannel;