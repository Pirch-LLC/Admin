import React, { useState, useEffect } from "react";
import AuthLayout from "../../layout/auth/AuthLayout";
import PrimaryButton from "../../shared/component/CustomButton";
import { InputOtp } from "primereact/inputotp";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendOtpAction, verifyOtpAction } from "../../store/actions/authActions";
import { login } from "../../services/auth";

export default function OtpVerification() {
    const { state } = useLocation();
    const formData = state?.data || {};
    const [data, setData] = useState({
        otp_code: "",
        email: formData?.email,
        token: formData?.token,
    });

    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [resendTimer, setResendTimer] = useState(5);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, otp_code: e.value }));
    };

    const handleResendOtp = () => {
        dispatch(
            sendOtpAction(data, "LOGIN", setResendLoading, (res) => {
                if (resendTimer > 0) return;
                setResendTimer(55);
                setData((prev) => ({ ...prev, otp_code: "" }));
            })
        );
    };

    const handleSubmit = () => {
        dispatch(
            verifyOtpAction(data, setLoading, (res) => {
                login(res.access, () => navigate("/users"));
            })
        );
    };

    return (
        <AuthLayout
            heading="OTP Verification"
            subheading={`Enter the 6-digit code sent to ${formData?.email?.replace(
                /(\w{2})[\w.-]+@([\w.]+\w)/,
                "$1****@$2"
            )}`}
        >
            <InputOtp
                value={data.otp_code}
                length={6}
                onChange={handleChange}
                className="otp-input"
            />
            <p className="sub-heading flex justify-content-center gap-2 mt-4">
                {resendLoading ? (
                    <span className="text-green font-semibold border-none bg-transparent p-0 text-sm">
                        Resending...
                    </span>
                ) : resendTimer > 0 ? (
                    <span className={`text-green border-none bg-transparent p-0 text-sm`}>
                        {`Resend code in ${resendTimer}s`}
                    </span>
                ) : (
                    <span
                        className={`text-green font-semibold border-none bg-transparent p-0 cursor-pointer underline text-sm`}
                        onClick={handleResendOtp}
                    >
                        Resend code
                    </span>
                )}
            </p>
            <PrimaryButton
                label="Continue"
                extraClassNames="w-full mt-3 bg-yellow-color"
                loading={loading}
                onClick={handleSubmit}
                disabled={!data.otp_code}
            />
        </AuthLayout>
    );
}
