-- SmartStyle AI: schema required by the application.
-- Applied automatically by the postgres image's init hook on first boot.
CREATE TABLE IF NOT EXISTS user_images (
    id SERIAL PRIMARY KEY,
    image_url TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
