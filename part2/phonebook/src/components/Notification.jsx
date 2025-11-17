export default function Notification({ message }) {
  if (message === null) return;

  return (
    <div className="success">{ message }</div>
  )
}