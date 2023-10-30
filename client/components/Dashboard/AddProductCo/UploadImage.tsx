import React from 'react'
import {UploadImageBox, Boxs, BoxImg} from '../AddProductCo/styles'
import Image from 'next/image'





function UploadImage() {
  return (
    <UploadImageBox>
        <BoxImg>
        <input type="file" name="file" id="file" />
    </BoxImg>
    </UploadImageBox>
  )
}

export default UploadImage