import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";
import { calculateAverageScore } from './calculate.ts'

const mockGetContent = () => Promise.resolve(
    "student_name,horoscope,exam_name,exam_score,feedback_score,would_recommend\n" +
    "Braylen Natalia,Gemini,AWS Certified Cloud Practitioner,1,4.26,Yes\n" +
    "Kash Macey,Leo,AWS Certified SysOps Administrator,2,3.04,Yes\n" +
    "Erica Daniela,Sagittarius,AWS Certified Cloud Practitioner,3,7.61,Yes"
)

Deno.test("calculate", async () => {
    const score = await calculateAverageScore(mockGetContent)
    assertEquals(score, 2);
});