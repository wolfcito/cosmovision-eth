import Image from 'next/image'

const ImageCircular = ({ srcImage, alt, value = 300 }) => {
  return (
    <div
      style={{
        borderRadius: '50%',
        width: `${value}px`,
        height: `${value}px`,
        position: 'relative',
        overflow: 'hidden',
        margin: '30px auto',
      }}
    >
      <Image
        height={value}
        width={value}
        src={srcImage}
        alt={alt}
        objectFit="cover"
        priority
      />
    </div>
  )
}

export default ImageCircular
