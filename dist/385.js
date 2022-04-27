'use strict';
(self.webpackChunkcandidate_listing =
  self.webpackChunkcandidate_listing || []).push([
  [385],
  {
    2001: (e, t, l) => {
      l.r(t);
      var a = l(2950),
        n = l(5202),
        o = l(9910),
        s = l(5056),
        r = l(3326);
      const f = (e) => {
        const {
            candidateNewModal: t,
            current: l,
            handleCandidateNewModal: n,
          } = e,
          f = r.yS.tokenStore.getToken(),
          [m, c] = (0, a.useState)(null);
        (0, a.useEffect)(() => {
          c(
            l || {
              firstName: '',
              lastName: '',
              emailID: '',
              phone: '',
              linkedinProfile: '',
              experience: '1 Years',
              highestEducationalQualification: 'Masters',
              preferredJobRole: 'Business Analyst',
              preferredJobLocation: 'India',
            }
          );
        }, [l]);
        const d = (e) => {
          const { name: t, value: l } = e.target;
          let a = { ...m };
          (a[t] = l), c(a);
        };
        return a.createElement(
          a.Fragment,
          null,
          a.createElement('div', {
            onClick: () => {
              handleConfirmModal();
            },
            className:
              'fixed left-0 top-0 z-[999] h-full w-full bg-black/40 ' +
              (t ? 'fadeIn' : 'hidden'),
          }),
          a.createElement(
            'div',
            {
              className:
                'transition-max-width absolute top-8 sm:top-1/2 left-1/2 z-[1000] w-full max-w-[520px] -translate-x-1/2 sm:-translate-y-1/2 transform px-4 duration-200 ' +
                (t ? '' : 'hidden'),
            },
            a.createElement(
              'div',
              {
                className:
                  'relative float-left w-full rounded-md bg-white py-4 px-6',
              },
              a.createElement(
                'div',
                {
                  className:
                    'float-left mb-5 w-full text-gray-dark text-xl font-bold',
                },
                'Add New Candidate'
              ),
              a.createElement(
                'div',
                { className: 'w-full float-left' },
                a.createElement(
                  'div',
                  { className: 'flex w-full items-center mt-2' },
                  a.createElement(
                    'div',
                    {
                      className:
                        'flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200',
                    },
                    a.createElement('img', {
                      className: 'max-w-full',
                      src: o.Z,
                      alt: '',
                    })
                  ),
                  a.createElement(
                    'div',
                    { className: 'flex-grow pl-2.5 pr-2 text-black truncate' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'text-sm font-bold cursor-pointer hover:underline',
                      },
                      a.createElement('input', {
                        className: 'hidden',
                        type: 'file',
                      }),
                      'Upload Profile Picture'
                    )
                  )
                ),
                a.createElement(
                  'div',
                  {
                    className:
                      'flex flex-col sm:flex-row w-full float-left sm:space-x-5',
                  },
                  a.createElement(
                    'div',
                    { className: 'w-full float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'First Name'
                    ),
                    a.createElement('input', {
                      name: 'firstName',
                      value: m?.firstName,
                      onChange: d,
                      className:
                        'w-full float-left h-11 px-3 text-base border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF] disabled:bg-[#f5f5f6] disabled:text-sm disabled:font-bold',
                      type: 'text',
                    })
                  ),
                  a.createElement(
                    'div',
                    { className: 'w-full float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'Last Name'
                    ),
                    a.createElement('input', {
                      name: 'lastName',
                      value: m?.lastName,
                      onChange: d,
                      className:
                        'w-full float-left h-11 px-3 text-base border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF] disabled:bg-[#f5f5f6] disabled:text-sm disabled:font-bold',
                      type: 'text',
                    })
                  )
                ),
                a.createElement(
                  'div',
                  { className: 'flex w-full float-left space-x-5' },
                  a.createElement(
                    'div',
                    { className: 'w-full float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'Email ID'
                    ),
                    a.createElement('input', {
                      name: 'emailID',
                      value: m?.emailID,
                      onChange: d,
                      className:
                        'w-full float-left h-11 px-3 text-base border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF] disabled:bg-[#f5f5f6] disabled:text-sm disabled:font-bold',
                      type: 'text',
                    })
                  )
                ),
                a.createElement(
                  'div',
                  { className: 'flex w-full float-left space-x-5' },
                  a.createElement(
                    'div',
                    { className: 'w-full float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'Phone'
                    ),
                    a.createElement('input', {
                      name: 'phone',
                      value: m?.phone,
                      onChange: d,
                      className:
                        'w-full float-left h-11 px-3 text-base border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF]',
                      type: 'text',
                    })
                  )
                ),
                a.createElement(
                  'div',
                  { className: 'flex w-full float-left space-x-5' },
                  a.createElement(
                    'div',
                    { className: 'w-full float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'Linkedin Profile'
                    ),
                    a.createElement('input', {
                      name: 'linkedinProfile',
                      value: m?.linkedinProfile,
                      onChange: d,
                      className:
                        'w-full float-left h-11 px-3 text-base border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF]',
                      type: 'text',
                    })
                  )
                ),
                a.createElement(
                  'div',
                  {
                    className:
                      'flex flex-col sm:flex-row w-full float-left sm:space-x-5',
                  },
                  a.createElement(
                    'div',
                    { className: 'w-full sm:w-2/5 float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'Experience'
                    ),
                    a.createElement(
                      'select',
                      {
                        name: 'experience',
                        value: m?.experience,
                        onChange: d,
                        className:
                          'candidate-select w-full float-left h-11 pl-3 pr-8 text-base bg-white border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF]',
                      },
                      a.createElement(
                        'option',
                        { className: 'text-sm' },
                        '1 Year'
                      ),
                      a.createElement(
                        'option',
                        { className: 'text-sm' },
                        '2 Years'
                      )
                    )
                  ),
                  a.createElement(
                    'div',
                    { className: 'w-full sm:w-3/5 float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'Highest Educational Qualification'
                    ),
                    a.createElement(
                      'select',
                      {
                        name: 'highestEducationalQualification',
                        value: m?.highestEducationalQualification,
                        onChange: d,
                        className:
                          'candidate-select w-full float-left h-11 pl-3 pr-8 text-base bg-white border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF]',
                      },
                      a.createElement(
                        'option',
                        { className: 'text-sm' },
                        'Masters'
                      ),
                      a.createElement(
                        'option',
                        { className: 'text-sm' },
                        'Bachelors'
                      )
                    )
                  )
                ),
                a.createElement(
                  'div',
                  {
                    className:
                      'flex flex-col sm:flex-row w-full float-left sm:space-x-5',
                  },
                  a.createElement(
                    'div',
                    { className: 'w-full float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'Preferred Job Role'
                    ),
                    a.createElement(
                      'select',
                      {
                        name: 'preferredJobRole',
                        value: m?.preferredJobRole,
                        onChange: d,
                        className:
                          'candidate-select w-full float-left h-11 pl-3 pr-8 text-base bg-white border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF]',
                      },
                      a.createElement(
                        'option',
                        { className: 'text-sm' },
                        'Business Analyst'
                      ),
                      a.createElement(
                        'option',
                        { className: 'text-sm' },
                        'UX Designer'
                      )
                    )
                  ),
                  a.createElement(
                    'div',
                    { className: 'w-full float-left mt-4 sm:mt-5' },
                    a.createElement(
                      'label',
                      {
                        className:
                          'w-full float-left text-sm font-bold text-black mb-1',
                      },
                      'Preferred Job Location'
                    ),
                    a.createElement(
                      'select',
                      {
                        name: 'preferredJobLocation',
                        value: m?.preferredJobLocation,
                        onChange: d,
                        className:
                          'candidate-select w-full float-left h-11 pl-3 pr-8 text-base bg-white border-2 border-[#afb0b8] rounded-lg focus:outline-none focus:border-[#0C5DFF]',
                      },
                      a.createElement(
                        'option',
                        { className: 'text-sm' },
                        'India'
                      ),
                      a.createElement('option', { className: 'text-sm' }, 'UK')
                    )
                  )
                )
              ),
              a.createElement(
                'div',
                {
                  className:
                    'float-left my-2 flex w-full items-center justify-end md-lt:flex-wrap mt-8',
                },
                a.createElement(
                  'button',
                  {
                    onClick: () => {
                      n();
                    },
                    type: 'button',
                    className:
                      'flex justify-center ml-4 w-32 h-11 flex-shrink-0 items-center rounded-md border-none px-5 text-base font-semibold text-[#586069] first-of-type:ml-0 bg-[rgb(4_9_33)] bg-opacity-5 hover:bg-opacity-10 focus:outline-none',
                  },
                  'Cancel'
                ),
                a.createElement(
                  'button',
                  {
                    onClick: async () => {
                      try {
                        l
                          ? await s.post(
                              '${process.env.BLOX_FUNCTION_URL_DEV}/updateCandidate',
                              m,
                              { headers: { Authorization: `Bearer ${f}` } }
                            )
                          : await s.post(
                              '${process.env.BLOX_FUNCTION_URL_DEV}/addCandidate',
                              m,
                              { headers: { Authorization: `Bearer ${f}` } }
                            ),
                          n();
                      } catch (e) {
                        console.log(e);
                      }
                    },
                    type: 'button',
                    className:
                      'flex justify-center ml-4 w-32 h-11 flex-shrink-0 items-center rounded-md bg-[#0C5DFF] px-5 text-base font-semibold text-white transition-all first-of-type:ml-0 hover:bg-[#0A4ACC] focus:outline-none',
                  },
                  'Create'
                )
              )
            )
          )
        );
      };
      function m() {
        return a.createElement('div', null, a.createElement(f, null));
      }
      n.render(a.createElement(m, null), document.getElementById('root'));
    },
  },
]);
