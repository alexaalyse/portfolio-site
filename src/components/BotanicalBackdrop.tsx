type BotanicalBackdropProps = {
  variant: "hero" | "about" | "work" | "resume" | "references" | "contact"
}

const BotanicalBackdrop = ({ variant }: BotanicalBackdropProps) => {
  return (
    <div className={`botanical-backdrop botanical-backdrop-${variant}`} aria-hidden="true">
      <svg
        className="botanical botanical-branch"
        viewBox="0 0 360 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M190 502C186 408 191 315 214 224C229 165 252 108 286 58" />
        <path d="M210 284C171 248 130 225 76 221" />
        <path d="M222 231C185 190 152 154 114 98" />
        <path d="M201 346C247 318 278 286 306 238" />
        <path d="M194 421C151 391 110 374 58 370" />
        <path d="M82 220C117 188 154 184 210 282C147 284 107 263 82 220Z" />
        <path d="M117 101C160 114 192 149 222 231C166 212 129 173 117 101Z" />
        <path d="M302 240C296 291 264 325 201 346C219 291 248 257 302 240Z" />
        <path d="M61 371C105 341 150 354 194 421C136 426 91 409 61 371Z" />
      </svg>

      <svg
        className="botanical botanical-flower"
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M210 210C170 163 168 118 210 72C252 118 250 163 210 210Z" />
        <path d="M210 210C257 170 302 168 348 210C302 252 257 250 210 210Z" />
        <path d="M210 210C250 257 252 302 210 348C168 302 170 257 210 210Z" />
        <path d="M210 210C163 250 118 252 72 210C118 168 163 170 210 210Z" />
        <path d="M210 210C205 151 228 113 286 94C305 152 282 190 210 210Z" />
        <path d="M210 210C269 205 307 228 326 286C268 305 230 282 210 210Z" />
        <path d="M210 210C215 269 192 307 134 326C115 268 138 230 210 210Z" />
        <path d="M210 210C151 215 113 192 94 134C152 115 190 138 210 210Z" />
        <circle cx="210" cy="210" r="34" />
        <circle cx="210" cy="210" r="12" />
      </svg>

      <svg
        className="botanical botanical-sprig"
        viewBox="0 0 320 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M142 408C139 333 147 262 172 193C191 142 219 97 258 54" />
        <path d="M169 202C132 169 100 152 58 151" />
        <path d="M154 256C195 245 228 223 260 184" />
        <path d="M145 319C106 291 74 279 34 282" />
        <path d="M61 152C94 126 130 134 169 202C119 203 82 187 61 152Z" />
        <path d="M256 186C244 228 210 251 154 256C176 214 206 190 256 186Z" />
        <path d="M37 282C70 254 108 264 145 319C96 321 62 309 37 282Z" />
        <path d="M255 55C242 98 218 132 182 161" />
      </svg>
    </div>
  )
}

export default BotanicalBackdrop
