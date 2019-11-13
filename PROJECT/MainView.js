import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MainView = () => (
  <Container>

      <h1>메인 페이지</h1>

      <form>
            <div>
                <a href={"/LoginView"}><input type={"button"} value={"로그인"} /></a><br />
                <a href={"/FindMyIdView"}>아이디 찾기</a><br />
                <a href={"/FindMyPasswdView"}>비밀번호 찾기</a><br />
                <a href={"/MemberRegisterView"}>회원가입</a><br />
            </div>

            <div>
                <a href={"/TicketingView1"}>예매하기</a>
            </div>

          <div>
              <img src={"http://ticketimage.interpark.com/TCMS4/Main/201910/MainVisual_69bcde11-f7b3-4cd2-90d5-a79dc6c4e353.jpg"} alt={"메인 배너"}/>  {/* 이미지가 실시간으로 변경 */}
          </div>

          <div>
              <br/>
              <a href={"http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=19016399"}>
                  <img src={"http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif"} alt={"이미지가 없어요"}/>
              </a>
              <a href={"http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=19011808"}>
                  <img src={"http://ticketimage.interpark.com/Play/image/large/19/19011808_p.gif"} alt={"이미지가 없어요"}/>
              </a>
              <a href={"http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=19011716"}>
                  <img src={"http://ticketimage.interpark.com/Play/image/large/19/19011716_p.gif"} alt={"이미지가 없어요"}/>
              </a>
              <br/>
              <a href={"http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=19016188"}>
                  <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191030034415_19016188.gif"} alt={"이미지가 없어요"}/>
              </a>
              <a href={"http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=19014994"}>
                  <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191014115354_19014994.gif"} alt={"이미지가 없어요"}/>
              </a>
              <a href={"http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=19016101"}>
                  <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191031112636_19016101.gif"} alt={"이미지가 없어요"}/>
              </a>
          </div>

      </form>

  </Container>
);

export default MainView;
