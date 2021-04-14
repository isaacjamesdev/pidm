import React, { useEffect, useState } from 'react';
import * as S from './Styled';

const CheckBox = ({ checked, onChange }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  useEffect(() => {
    setToggleCheckBox(checked);
  }, [])

  return (
    <S.TouchableBox
      onPress={() => {
        setToggleCheckBox(old => {
          onChange(!old);
          return !old
        })
      }}
    >
      <S.ContainerBox>
        <S.FilledBox sent={toggleCheckBox} />
      </S.ContainerBox>
    </S.TouchableBox>
  )
}

export default CheckBox;