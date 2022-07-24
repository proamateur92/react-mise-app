import styled from 'styled-components';

const SelectBar = ({ step, getSidoName }) => {
  const chooseSi = (event) => {
    getSidoName(event.target.value);
  };
  return (
    <Menu>
      <SelectMenu name='sidoName' onChange={chooseSi}>
        <option value='전국'>전국</option>
        <option value='서울'>서울</option>
        <option value='대구'>대구</option>
        <option value='인천'>인천</option>
        <option value='광주'>광주</option>
        <option value='대전'>대전</option>
        <option value='울산'>울산</option>
        <option value='경기'>경기</option>
        <option value='강원'>강원</option>
        <option value='충북'>충북</option>
        <option value='충남'>충남</option>
        <option value='전북'>전북</option>
        <option value='전남'>전남</option>
        <option value='경북'>경북</option>
        <option value='경남'>경남</option>
        <option value='제주'>제주</option>
        <option value='세종'>세종</option>
      </SelectMenu>
      {step !== 1 && (
        <select name='detailName'>
          <option value='미정'>미정</option>
          <option value='미정'>미정</option>
        </select>
      )}
    </Menu>
  );
};

const Menu = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;
const SelectMenu = styled.select`
  width: 50%;
  height: 25%;
  font-size: 20px;
`;
export default SelectBar;
