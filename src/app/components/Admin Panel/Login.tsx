import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP generation and send to email
    console.log('Sending OTP to email:', email);
    setIsOtpSent(true);
  };

  return (
    <div className="w-full min-h-screen bg-surface-neutral-default relative">
      <div className="absolute w-full h-full opacity-15 bg-[length:1.5rem_1.5rem] bg-[linear-gradient(to_right,var(--border-neutral-hovered)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-neutral-hovered)_1px,transparent_1px)]"></div>
      <div className="pt-32">
        <div className="flex flex-col max-w-[25.125rem] items-center mx-auto relative z-10 bg-surface-neutral-default rounded-full p-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <img alt="Airtribe logo" width="40" height="24" src="/_next/static/media/main.65973701.svg" />
              <span className="font-jakarta text-logo select-none">Airtribe</span>
            </div>
            <div className="w-px h-4 bg-[var(--gray-8)] rounded-full shrink-0"></div>
            <div className="font-jakarta text-[1.125rem] leading-[135%] font-semibold text-text-neutral-disabled select-none">Admin</div>
          </div>

          <h2 className="mt-9 text-center">You've been invited to Airtribe</h2>
          <form onSubmit={handleEmailSubmit} className="w-full">
            <p className="text-body-sm-regular text-text-neutral-subdued text-center mt-2">
              Please enter your email to receive
              <br />
              <span className="text-text-neutral-default">one-time password</span>
            </p>

            <div className="flex flex-col gap-3 self-stretch flex-1 mt-6">
              <div className="rt-TextFieldRoot rt-r-size-3 rt-variant-surface self-stretch outline-none">
                <input
                  type="email"
                  spellCheck="false"
                  id="email-id"
                  placeholder="Enter your email id"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rt-reset rt-TextFieldInput"
                />
              </div>
              <button
                type="submit"
                className="rt-reset rt-BaseButton rt-r-size-3 rt-variant-solid rt-Button"
              >
                {isOtpSent ? 'OTP Sent' : 'Get OTP'}
              </button>
            </div>
          </form>

          <div className="flex mt-10 gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-action-primary-default"></div>
            <div className="w-2 h-2 rounded-full bg-border-neutral-hovered"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
