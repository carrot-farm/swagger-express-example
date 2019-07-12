import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import express from 'express';

const router = express.Router();

// ===== 옵션
const options = {
    // swagger 문서 설정
    swaggerDefinition: {
        // 문서 정보
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express'
        },
        // 주소
        host: 'localhost:3000',
        // 기본 root path
        basePath: '/',
        contact: {
            email: 'chohoki@naver.com'
        },
        // 각 api에서 설명을 기록할 때 사용할 constant들을 미리 등록해 놓은 것.
        // components: {
        //     res: {
        //         BadRequest: {
        //             description: '잘못된 요청.',
        //             schema: {
        //                 $ref: '#/components/errorResult/Error'
        //             }
        //         }
        //     },
        //     Forbidden: {
        //         description: '권한이 없음.',
        //         schema: {
        //             $ref: '#/components/errorResult/Error'
        //         }
        //     },
        //     NotFound: {
        //         description: '없는 리소스 요청.',
        //         schema: {
        //             $ref: '#/components/errorResult/Error'
        //         }
        //     }
        // },
        // errorResult: {
        //     Error: {
        //         type: 'object',
        //         properties: {
        //             errMsg: {
        //                 type: 'string',
        //                 description: '에러 메시지 전달'
        //             }
        //         }
        //     }
        // }
    },
    // swagger api가 존재하는 곳 입니다.
    apis: ['./controllers/*.js']
};

const specs = swaggerJsdoc(options);

// ===== 라우팅
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router;

