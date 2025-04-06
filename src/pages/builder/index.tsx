
import LeftCom from './leftPart';
import RightCom from './rightPart';
import MainCom from './mainPart';
import DesignTop from './designTop';
export default function Builder() {
  return (
    <div>
      <DesignTop />
      <LeftCom />
      <MainCom /> 
      <RightCom />
    </div>
  )
}

