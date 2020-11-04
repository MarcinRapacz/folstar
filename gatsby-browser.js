export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Strona została zaktualizowana ` +
      `Czy chcesz ją teraz odświeżyć?`
  )

  if (answer === true) {
    window.location.reload()
  }
}