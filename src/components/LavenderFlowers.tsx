const LAVENDER_SRC = `${import.meta.env.BASE_URL}lavender.webp`

/** Bottom-corner lavender — gentle idle motion only. */
export function LavenderFlowers() {
  return (
    <div className="lavender-decor" aria-hidden>
      <div className="lavender-side lavender-side--left">
        <div className="lavender-art-mask">
          <img
            src={LAVENDER_SRC}
            alt=""
            className="lavender-art"
            width={954}
            height={1200}
            draggable={false}
          />
        </div>
      </div>
      <div className="lavender-side lavender-side--right">
        <div className="lavender-side-flip">
          <div className="lavender-art-mask">
            <img
              src={LAVENDER_SRC}
              alt=""
              className="lavender-art"
              width={954}
              height={1200}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
