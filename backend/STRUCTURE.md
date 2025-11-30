src/
├── domain/
│   ├── entities/
│   │   ├── user.entity.ts
│   │   └── product.entity.ts
│   │
│   ├── value-objects/
│   │   ├── email.vo.ts
│   │   ├── password.vo.ts
│   │   └── price.vo.ts
│   │
│   ├── repositories/
│   │   ├── user.repository.interface.ts
│   │   └── product.repository.interface.ts
│   │
│   ├── use-cases/
│   │   ├── user/
│   │   │   ├── create-user.usecase.ts
│   │   │   ├── update-user.usecase.ts
│   │   │   ├── delete-user.usecase.ts
│   │   │   ├── get-user.usecase.ts
│   │   │   └── list-users.usecase.ts
│   │   │
│   │   └── product/
│   │       ├── create-product.usecase.ts
│   │       ├── update-product.usecase.ts
│   │       ├── delete-product.usecase.ts
│   │       ├── get-product.usecase.ts
│   │       └── list-products.usecase.ts
│   │
│   └── events/
│       ├── user-created.event.ts
│       ├── product-created.event.ts
│       └── stock-updated.event.ts
│
├── infra/
│   ├── database/
│   │   ├── typeorm/
│   │   │   ├── entities/
│   │   │   │   ├── typeorm-user.entity.ts
│   │   │   │   └── typeorm-product.entity.ts
│   │   │   ├── user.repository.ts
│   │   │   └── product.repository.ts
│   │   └── migrations/
│   │       ├── 1710000000000-CreateUsersTable.ts
│   │       └── 1710000000001-CreateProductsTable.ts
│   │
│   ├── services/
│   │   ├── bcrypt.service.ts
│   │   ├── jwt.service.ts
│   │   ├── s3-storage.service.ts
│   │   └── queue-sqs.service.ts
│   │
│   ├── mappers/
│   │   ├── user.mapper.ts
│   │   └── product.mapper.ts
│   │
│   └── configs/
│       ├── typeorm.config.ts
│       └── env.config.ts
│
└── modules/
    ├── user/
    │   ├── user.controller.ts
    │   ├── user.module.ts
    │   ├── dtos/
    │   │   ├── create-user.dto.ts
    │   │   ├── update-user.dto.ts
    │   │   └── filter-user.dto.ts
    │   └── presenters/
    │       └── user.presenter.ts
    │
    └── product/
        ├── product.controller.ts
        ├── product.module.ts
        ├── dtos/
        │   ├── create-product.dto.ts
        │   ├── update-product.dto.ts
        │   └── filter-product.dto.ts
        └── presenters/
            └── product.presenter.ts
