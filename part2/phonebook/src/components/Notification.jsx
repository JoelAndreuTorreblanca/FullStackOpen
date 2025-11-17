export default function Notification({ message, type }) {
  if (message === null) return;

  return (
    <div className={ type }>{ message }</div>
  )
}