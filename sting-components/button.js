module.exports = Button = (styles) => ({
    '.btn': {
        "@apply inline-flex justify-center rounded-md border shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 items-center": {},
                   },

            '.btn-rounded': {
        "@apply rounded-full p-1": {},
                   },
    
    '.btn-outline': {
            "@apply inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500": {},
                       },
    '.btn-primary': {
        "@apply px-4 py-2 text-white bg-primary-400 hover:bg-primary-600 focus:ring-primary-400":{},
    },
    '.btn-secondary': {
        "@apply px-4 py-2 text-white bg-secondary-400 hover:bg-secondary-600 focus:ring-secondary-400":{},
    },
    '.btn-info': {
        "@apply px-4 py-2 text-white bg-info-400 hover:bg-info-600 focus:ring-info-400":{},
    },
    '.btn-warning': {
        "@apply px-4 py-2 text-warning-1000 bg-warning-400 hover:bg-warning-600 focus:ring-warning-400":{},
    },
    '.btn-success': {
        "@apply px-4 py-2 text-success-50 bg-success-400 hover:bg-success-600 focus:ring-success-400":{},
    },
    '.btn-danger': {
        "@apply px-4 py-2 text-danger-50 bg-danger-400 hover:bg-danger-600 focus:ring-danger-400":{},
    },
    '.btn-neutral': {
        "@apply px-4 py-2 text-neutral-50 bg-neutral-400 hover:bg-neutral-600 focus:ring-neutral-400":{},
    },
    '.btn-icon': {
        "@apply -ml-1 mr-3 h-5 w-5":{},
    },
    '.btn-trailing-icon': {
        "@apply ml-2 -mr-0.5 h-4 w-4":{},
    },
  
  });