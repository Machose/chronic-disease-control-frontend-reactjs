import styled from "styled-components";

export const Container = styled.div`
   color: #fff;
   padding: 10px 30px;
   grid-area: header;
   background: #217770;
`;

export const Content = styled.div`
   height: 40px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;

   nav {
      a {
         font-weight: bold;
         color: #fff;
         font-size: 30px;
      }
   }

   aside {
      display: flex;
      align-items: center;
   }
`;

export const Profile = styled.div`
   display: flex;
   margin-left: 20px;
   padding-left: 20px;
   border-left: 1px solid #eee;

   div {
      text-align: right;
      margin-right: 10px;

      strong {
         display: block;
         color: #eee;
      }

      a {
         display: block;
         margin-top: 2px;
         font-size: 12px;
         color: #fff;
      }

      div {
         display: flex;
         flex-direction: row;
         justify-content: flex-end;
         align-items: baseline;

         span {
            font-size: 12px;
            margin-right: 14px;
            cursor: pointer;
         }

         a {
            cursor: pointer;
            border-left: 1px solid rgba(255, 255, 255, 0.2);
            padding-left: 14px;
         }
      }
   }
   img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      align-self: center;
   }
`;

export const Header = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;
