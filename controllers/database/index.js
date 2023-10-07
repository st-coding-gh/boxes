export default function (req, res) {
  console.log('database index')
  res.send({
    controller: 'database',
    action: 'no actions',
  })
}
