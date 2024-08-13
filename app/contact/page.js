'use client';
import Breadcumb from '@/layouts/breadcumb';
import Layout from '@/layouts/layout';
import { Location } from '@/public/svg/icon';
import { useForm } from '@formspree/react';

const FieldErrorCodeEnum = {
  REQUIRED_FIELD_EMPTY: 'REQUIRED_FIELD_EMPTY',
  REQUIRED_FIELD_MISSING: 'REQUIRED_FIELD_MISSING',
  STRIPE_CLIENT_ERROR: 'STRIPE_CLIENT_ERROR',
  STRIPE_SCA_ERROR: 'STRIPE_SCA_ERROR',
  TYPE_EMAIL: 'TYPE_EMAIL',
  TYPE_NUMERIC: 'TYPE_NUMERIC',
  TYPE_TEXT: 'TYPE_TEXT',
};

// Armenian translations for error messages
const errorMessages = {
  [FieldErrorCodeEnum.REQUIRED_FIELD_EMPTY]: 'Դաշտը պարտադիր է',
  [FieldErrorCodeEnum.REQUIRED_FIELD_MISSING]: 'Դաշտը բացակայում է',
  [FieldErrorCodeEnum.STRIPE_CLIENT_ERROR]: 'STRIPE հաճախորդի սխալ',
  [FieldErrorCodeEnum.STRIPE_SCA_ERROR]: 'STRIPE SCA սխալ',
  [FieldErrorCodeEnum.TYPE_EMAIL]: 'Մուտքագրեք վավեր էլ. հասցե',
  [FieldErrorCodeEnum.TYPE_NUMERIC]: 'Մուտքագրեք թիվ',
  [FieldErrorCodeEnum.TYPE_TEXT]: 'Մուտքագրեք տեքստ',
};

// Function to get the appropriate Armenian message
const getErrorMessage = (error) => {
  return errorMessages[error.code] || 'Սխալ է տեղի ունեցել։';
};

export default function page() {
  const [state, handleSubmit, reset] = useForm('xwpeonow');
  const fieldErrors = state.errors?.fieldErrors || new Map();

  return (
    <Layout>
      <Breadcumb CurrentPage={'Հետադարձ կապ'} />
      <div className='industify_fn_contact'>
        <div className='container'>
          <div className='contact_in'>
            <div className='map_holder'>
              <iframe
                width='100%'
                height='400'
                title='google-map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.661726631744!2d44.50479787623913!3d40.1990139714755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd3e9d09acbb%3A0x69055f3d417cb5c4!2s8%20Vahram%20Papazyan%20St%2C%20Yerevan%200012%2C%20Armenia!5e1!3m2!1sen!2sus!4v1722844407477!5m2!1sen!2sus'
                allowFullScreen
              ></iframe>
            </div>

            <div className='contact_holder'>
              <div className='contact_left'>
                <h3>Թողեք Ձեր հաղորդագրությունը</h3>
                {state.succeeded ? (
                  <div className='success'>
                    <p>Շնորհակալություն, Ձեզ հաղորդագրությունը հաջողությամբ ուղարկվեց!</p>
                    <button onClick={reset}>Կրկին լրացնել</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className='empty_notice'>
                      <span>Please Fill Required Fields</span>
                    </div>
                    <div className='items'>
                      <div className='item'>
                        <input id='name' type='text' name='name' placeholder='Ձեր անունը' />
                        {fieldErrors.has('name') && (
                          <div className='error-message'>
                            {fieldErrors.get('name').map((error, index) => (
                              <p key={index}>{getErrorMessage(error)}</p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className='item'>
                        <input id='email' type='email' name='email' placeholder='Ձեր էլ. հասցեն' />
                        {fieldErrors.has('email') && (
                          <div className='error-message'>
                            {fieldErrors.get('email').map((error, index) => (
                              <p key={index}>{getErrorMessage(error)}</p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className='item'>
                        <textarea id='message' name='message' placeholder='Ձեր հաղորդագրությունը' />
                        {fieldErrors.has('message') && (
                          <div className='error-message'>
                            {fieldErrors.get('message').map((error, index) => (
                              <p key={index}>{getErrorMessage(error)}</p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className='item'>
                        <button id='send_message' type='submit' disabled={state.submitting}>
                          Ուղարկել
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              <div className='contact_right'>
                <div className='fn_cs_location_list'>
                  <ul className='list'>
                    <li className='location_item'>
                      <div className='item'>
                        <div className='title_holder'>
                          <span className='icon_wrapper'>
                            <span className='icon'>
                              <Location className='fn__svg' />
                            </span>
                            <span className='shape'></span>
                          </span>
                          <h3>Կոնտակտային տվյալներ</h3>
                        </div>
                        <div className='content_holder'>
                          <ul>
                            <li>Վահրամ Փափազյան 8</li>
                            <li>
                              Հեռախոս: <a href='tel:+37444001496'>+374 44 001 496</a>
                            </li>
                            <li>
                              Էլ. հասցե:{' '}
                              <a href='mailto:info@tconstruction.am'>info@tconstruction.am</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}