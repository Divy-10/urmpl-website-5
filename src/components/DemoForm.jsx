import { useState } from 'react';
import { Info, TriangleAlert, Phone } from 'lucide-react';
import { COMPANY } from '../data/company.js';
import './DemoForm.css';

/**
 * PRESENTATION DEMO FORM.
 * Nothing is sent anywhere: no backend, no email, no CRM.
 * On submit we validate and then clearly state that nothing was sent —
 * we never show a fake "success" message.
 */
const TOPICS = ['Textile Yarns', 'Petrochemicals', 'International Trading', 'General Enquiry'];

export default function DemoForm({ variant = 'contact', defaultTopic = '', callback = false }) {
  const isEnquiry = variant === 'enquiry';
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    topic: defaultTopic || (callback ? 'General Enquiry' : ''),
    quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!values.email.trim()) e.email = 'Please enter an email address.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Please enter a valid email address.';
    if (callback && !values.phone.trim()) e.phone = 'Please enter a phone number for the callback.';
    if (!values.topic) e.topic = 'Please choose a topic.';
    if (!callback && !values.message.trim()) e.message = 'Please describe your requirement.';
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    setAttempted(Object.keys(e).length === 0);
  };

  const field = (k, label, props = {}, required = false) => (
    <div className={`field ${errors[k] ? 'has-error' : ''}`}>
      <label htmlFor={`f-${k}`}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={`f-${k}`}
        value={values[k]}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `e-${k}` : undefined}
        {...props}
      />
      {errors[k] && (
        <span className="field__err" id={`e-${k}`}>
          {errors[k]}
        </span>
      )}
    </div>
  );

  return (
    <form className="demo-form" onSubmit={onSubmit} noValidate>
      <div className="demo-form__banner" role="note">
        <Info size={18} aria-hidden="true" />
        <p>
          <strong>Demo form.</strong> This website is a presentation demo. Submissions are not sent,
          stored or emailed. To reach URMPL, please call{' '}
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>.
        </p>
      </div>

      <div className="demo-form__grid">
        {field('name', 'Full name', { autoComplete: 'name' }, true)}
        {field('company', 'Company', { autoComplete: 'organization' })}
        {field('email', 'Email address', { type: 'email', autoComplete: 'email' }, true)}
        {field('phone', 'Phone number', { type: 'tel', autoComplete: 'tel' }, callback)}
        {isEnquiry && field('country', 'Country / destination', { autoComplete: 'country-name' })}
        <div className={`field ${errors.topic ? 'has-error' : ''}`}>
          <label htmlFor="f-topic">
            Topic <span aria-hidden="true">*</span>
          </label>
          <select id="f-topic" value={values.topic} onChange={set('topic')} aria-invalid={!!errors.topic}>
            <option value="">Select a topic</option>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {errors.topic && <span className="field__err">{errors.topic}</span>}
        </div>
        {isEnquiry && field('quantity', 'Indicative quantity', { placeholder: 'e.g. per shipment or per month' })}
      </div>

      <div className={`field ${errors.message ? 'has-error' : ''}`}>
        <label htmlFor="f-message">
          {callback ? 'Preferred time / notes' : 'Your requirement'}{' '}
          {!callback && <span aria-hidden="true">*</span>}
        </label>
        <textarea
          id="f-message"
          rows={5}
          value={values.message}
          onChange={set('message')}
          aria-invalid={!!errors.message}
          placeholder={
            callback
              ? 'Let us know a convenient time to call.'
              : 'Product, specification, quantity, destination and timing.'
          }
        />
        {errors.message && <span className="field__err">{errors.message}</span>}
      </div>

      <div className="demo-form__actions">
        <button type="submit" className="btn btn--primary btn--wide">
          {callback ? 'Request Callback (Demo)' : isEnquiry ? 'Submit Enquiry (Demo)' : 'Send Message (Demo)'}
        </button>
        <span className="demo-form__note">Fields marked * are required.</span>
      </div>

      {attempted && (
        <div className="demo-form__result" role="status" aria-live="polite">
          <TriangleAlert size={20} aria-hidden="true" />
          <div>
            <strong>Not sent — demo only.</strong>
            <p>
              Your details passed validation, but this demo website does not send or store form
              submissions. Nothing has been received by URMPL. Please contact the company directly:
            </p>
            <a href={COMPANY.phoneHref} className="demo-form__call">
              <Phone size={15} aria-hidden="true" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
