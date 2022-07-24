import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SelectBar from './SelectBar';

const ViewMise = () => {
  const dispatch = useDispatch();
  const [bookmark, setBookmark] = useState([{}]);
  const [step, setStep] = useState([0, 1, 2]);
  const [sidoName, setSidoName] = useState('전국');

  const miseData = useSelector((state) => state.mise.list);

  // 페이지 이동
  const moveStep = (page) => {
    setStep(page);
  };

  // 시 이름 선택
  const getSidoName = (sidoName) => {
    setSidoName(sidoName);
  };
  // 북마크 클릭
  const handleBookmark = (idx) => {
    //   bookmark.filter(data => data.id === idx);
    //   setBookmark();
  };

  const my = miseData.map((data, idx) => {
    if (sidoName === '전국') {
      return (
        <MiseContainer color={data.pm10Value} key={Math.floor(Math.random() * 100000)}>
          <div className='miseHeader'>
            <div className='miseAdr'>
              <span>{data.stationName}</span>
              <span>{data.sidoName}</span>
            </div>
            <span className='bookmark' onClick={() => handleBookmark(idx)}>
              ☆
            </span>
          </div>
          {data.pm10Value < 31 && (
            <div className='miseState'>
              <span>좋음</span>
            </div>
          )}
          {data.pm10Value < 81 && data.pm10Value >= 31 && (
            <div className='miseState'>
              <span>보통</span>
            </div>
          )}
          {data.pm10Value < 151 && data.pm10Value >= 81 && (
            <div className='miseState'>
              <span>나쁨</span>
            </div>
          )}
          {data.pm10Value >= 151 && (
            <div className='miseState'>
              <span>매우나쁨</span>
            </div>
          )}
          <span className='value'>미세먼지 수치: {data.pm10Value}</span>
          <span className='time'>({data.dataTime})</span>
        </MiseContainer>
      );
    } else if (data.sidoName === sidoName) {
      return (
        <MiseContainer color={data.pm10Value} key={Math.floor(Math.random() * 100000)}>
          <div className='miseHeader'>
            <div className='miseAdr'>
              <span>{data.stationName}</span>
              <span>{data.sidoName}</span>
            </div>
            <span className='bookmark' onClick={() => handleBookmark(idx)}>
              ☆
            </span>
          </div>
          {data.pm10Value < 31 && (
            <div className='miseState'>
              <span>좋음</span>
            </div>
          )}
          {data.pm10Value < 81 && data.pm10Value >= 31 && (
            <div className='miseState'>
              <span>보통</span>
            </div>
          )}
          {data.pm10Value < 151 && data.pm10Value >= 81 && (
            <div className='miseState'>
              <span>나쁨</span>
            </div>
          )}
          {data.pm10Value >= 151 && (
            <div className='miseState'>
              <span>매우나쁨</span>
            </div>
          )}
          <span className='value'>미세먼지 수치: {data.pm10Value}</span>
          <span className='time'>({data.dataTime})</span>
        </MiseContainer>
      );
    } else {
      return <span>일치하는 정보가 없습니다.</span>;
    }
  });

  const all = miseData.map((data, idx) => {
    if (sidoName === '전국') {
      return (
        <MiseContainer color={data.pm10Value} key={Math.floor(Math.random() * 100000)}>
          <div className='miseHeader'>
            <div className='miseAdr'>
              <span>{data.stationName}</span>
              <span>{data.sidoName}</span>
            </div>
            <span className='bookmark' onClick={() => handleBookmark(idx)}>
              ☆
            </span>
          </div>
          {data.pm10Value < 31 && (
            <div className='miseState'>
              <span>좋음</span>
            </div>
          )}
          {data.pm10Value < 81 && data.pm10Value >= 31 && (
            <div className='miseState'>
              <span>보통</span>
            </div>
          )}
          {data.pm10Value < 151 && data.pm10Value >= 81 && (
            <div className='miseState'>
              <span>나쁨</span>
            </div>
          )}
          {data.pm10Value >= 151 && (
            <div className='miseState'>
              <span>매우나쁨</span>
            </div>
          )}
          <span className='value'>미세먼지 수치: {data.pm10Value}</span>
          <span className='time'>({data.dataTime})</span>
        </MiseContainer>
      );
    } else if (data.sidoName === sidoName) {
      return (
        <MiseContainer color={data.pm10Value} key={Math.floor(Math.random() * 100000)}>
          <div className='miseHeader'>
            <div className='miseAdr'>
              <span>{data.stationName}</span>
              <span>{data.sidoName}</span>
            </div>
            <span className='bookmark' onClick={() => handleBookmark(idx)}>
              ☆
            </span>
          </div>
          {data.pm10Value < 31 && (
            <div className='miseState'>
              <span>좋음</span>
            </div>
          )}
          {data.pm10Value < 81 && data.pm10Value >= 31 && (
            <div className='miseState'>
              <span>보통</span>
            </div>
          )}
          {data.pm10Value < 151 && data.pm10Value >= 81 && (
            <div className='miseState'>
              <span>나쁨</span>
            </div>
          )}
          {data.pm10Value >= 151 && (
            <div className='miseState'>
              <span>매우나쁨</span>
            </div>
          )}
          <span className='value'>미세먼지 수치: {data.pm10Value}</span>
          <span className='time'>({data.dataTime})</span>
        </MiseContainer>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <Container>
        {step !== 2 && <SelectBar step={step} getSidoName={getSidoName} />}
        {step === 0 && my}
        {step === 1 && all && all}
      </Container>
      <Footer>
        <div onClick={() => moveStep(0)}>내 지역보기</div>
        <div onClick={() => moveStep(1)}>전체 시도보기</div>
        <div onClick={() => moveStep(2)}>즐겨찾기</div>
      </Footer>
    </>
  );
};

const Footer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 10%;
  bottom: 0;
  background-color: #ffffff;
  border-top: 2px solid #cccccc;
  div {
    width: 33.3%;
    padding: 4% 0;
    text-align: center;
  }
  div:hover {
    cursor: pointer;
    background-color: #cccccc;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
`;

const MiseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 5% 6%;
  height: 20%;
  margin: 2%;
  border-radius: 15px;
  background-color: ${(props) => props.color < 31 && '#32A1FC'};
  background-color: ${(props) => props.color < 81 && props.color >= 31 && '#01C73C'};
  background-color: ${(props) => props.color < 151 && props.color >= 81 && '#FD9B5A'};
  background-color: ${(props) => props.color > 151 && '#FF5959'};
  span {
    color: #ffffff;
  }
  .miseHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .miseAdr {
      span:first-of-type {
        display: inline-block;
        margin-right: 5px;
        font-size: 24px;
      }
      span:nth-of-type(2) {
        font-size: 18px;
      }
    }
    .bookmark {
      font-size: 25px;
      cursor: pointer;
    }
  }

  .miseState {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    width: 60%;
    margin: 6% auto;
    padding: 5% 2%;
    border-radius: 12px;
    background-color: #ffffff;
    span {
      color: ${(props) => props.color < 31 && '#32A1FC'};
      color: ${(props) => props.color < 81 && props.color >= 31 && '#01C73C'};
      color: ${(props) => props.color < 151 && props.color >= 81 && '#FD9B5A'};
      color: ${(props) => props.color > 151 && '#FF5959'};
    }
  }

  .value,
  .time {
    font-size: 18px;
    text-align: center;
  }
`;

export default ViewMise;
