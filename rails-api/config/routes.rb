Rails.application.routes.draw do
  #mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      #resources :test, only: %i[index]

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      namespace :rakuten do
        get "items", to: "items#search"
        get "items", to: "items#read(categorie_large)"
        get "items", to: "items#read2(categories_medium)"
        get "items", to: "items#read3(categories_small)"

        get "larges", to: "larges#get"
        get "larges", to: "larges#read"

        get "media", to: "media#get"
        get "media", to: "media#read"

        get "smalls", to: "smalls#get"
        get "smalls", to: "smalls#read"

        get "lists", to: "lists#get"
      end
    end
  end
end
