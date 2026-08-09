// An <img> that retries once with a cache-busting query param if it fails
// to load (e.g. a transient network blip). Used everywhere the site loads
// an image, so it lives at the top components/ level rather than under any
// one page or feature folder.
export default function RetryImage({ src, alt, className, ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        if (!e.currentTarget.dataset.retried) {
          e.currentTarget.dataset.retried = 'true'
          e.currentTarget.src = `${src}?retry=${Date.now()}`
        }
      }}
      {...rest}
    />
  )
}
